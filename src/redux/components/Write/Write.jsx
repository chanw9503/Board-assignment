import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hook/useInput';
import Button from '../common/Button';
import LabelInput from '../common/LabelInput';
import LabelTextArea from '../common/LabelTextArea';
import { StyledWrap, StyledWrtingForm } from './styles';
import { v4 as uuidv4 } from 'uuid';

import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addBoard, getBoard } from '../../../api/board';
import useForm from '../../hook/useForm';

function Write() {
  // const [title, onHandlerTitle] = useInput();
  // const [writer, onHandlerWriter] = useInput();
  // const [contents, onHandlerContents] = useInput();

  //원래 useInput을 활용하여 form태그안에 있는 값들을 하나하나씩 호출해서 만들었는데,
  //코드를 줄이기 위해 useForm이라는 CustomHook을 만들어서 Form태그 안에서 입력되는 것들을 묶었다.
  const [form, onHandlerForm] = useForm();

  //페이지 이동.
  const navigate = useNavigate();

  //const board = useSelector((state) => state.board);
  const { isLoading, isError, data } = useQuery('board', getBoard);

  const queryClient = useQueryClient();

  const mutation = useMutation(addBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('board');
    },
  });

  const getCurrentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');

    const days = `${year}-${month}-${date}`;
    return days;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const day = getCurrentTime();
    const number = data.length;
    console.log(number);
    const newBoard = {
      id: uuidv4(),
      title: form.title,
      body: form.body,
      writer: form.author,
      day,
      no: number,
    };
    if (!form.isAuthorError && !form.isBodyError && !form.isTitleError) {
      mutation.mutate(newBoard);
      //dispatch(addBoard(newBoard));
      navigate('/');
    } else {
      alert('설정 길이를 초과했습니다.');
    }
  };

  return (
    <>
      <StyledWrap>
        <StyledWrtingForm onSubmit={handleSubmit}>
          {/* id, label, placeholder, value, onChange */}
          <LabelInput
            size="small"
            value={form.author}
            onChange={(e) => onHandlerForm('author', e)}
            id="Writer"
            label="작성자"
            placeholder="작성자를 입력해 주세요(10자 이내)"
            limit={10}
            isError={form.isAuthorError}
          />
          <LabelInput
            size="small"
            value={form.title}
            onChange={(e) => onHandlerForm('title', e)}
            id="title"
            label="제목"
            placeholder="제목을 입력해 주세요 (50자 이내)"
            limit={50}
            isError={form.isTitleError}
          />
          <LabelTextArea
            value={form.body}
            onChange={(e) => onHandlerForm('body', e)}
            id="contents"
            label="내용 "
            placeholder="작성자를 입력해 주세요 (200자 이내)"
            limit={200}
            isError={form.isBodyError}
          />
          <div>
            {!form.isAuthorError && !form.isBodyError && !form.isTitleError ? (
              <Button disable={false}>저장하기</Button>
            ) : (
              <Button disable={true}>저장하기</Button>
            )}
          </div>
        </StyledWrtingForm>
      </StyledWrap>
    </>
  );
}

export default Write;
