import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CustomLine from '../redux/components/common/CustomLine';
import Button from '../redux/components/common/Button';
import LabelInput from '../redux/components/common/LabelInput';
import useInput from '../redux/hook/useInput';
import LabelTextArea from '../redux/components/common/LabelTextArea';
import { modifyBoard } from '../redux/modules/board';
import DetailBoard from '../redux/components/DetailBoard';

function Post() {
  return <DetailBoard />;
}

export default Post;
