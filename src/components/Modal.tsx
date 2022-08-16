import React, { FC, ChangeEvent } from 'react';
import { Input, Button } from 'antd';

import { Mode } from '../types';
import { ModalBackGround, AddTodoModal, InputWrapper, ButtonWrapper } from '../styles/ts/common/Modal';

interface ModalProps {
  isOpen: boolean;
  mode: Mode;
  title: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  content: string;
  onChangeContent: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAddTodo?: () => void;
  onUpdateTodo?: () => void;
  onCancel: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  mode,
  title,
  onChangeTitle,
  content,
  onChangeContent,
  onAddTodo,
  onUpdateTodo,
  onCancel,
}) => {
  return (
    <>
      {isOpen && (
        <>
          <AddTodoModal>
            <InputWrapper>
              <div className='title input_form'>
                <label>Title</label>
                <br />
                <Input
                  className='title input'
                  placeholder='제목을 입력하세요.'
                  value={title}
                  onChange={onChangeTitle}
                  autoFocus
                />
              </div>
              <div className='content input_form'>
                <label>Content</label>
                <br />
                <Input
                  className='content input'
                  placeholder='내용을 입력하세요.'
                  value={content}
                  onChange={onChangeContent}
                />
              </div>
            </InputWrapper>
            <ButtonWrapper>
              {mode === 'ADD' ? (
                <Button className='add btn' onClick={onAddTodo}>
                  추가
                </Button>
              ) : (
                <Button className='update btn' onClick={onUpdateTodo}>
                  수정
                </Button>
              )}
              <Button className='cancel btn' onClick={onCancel}>
                취소
              </Button>
            </ButtonWrapper>
          </AddTodoModal>
          <ModalBackGround></ModalBackGround>
        </>
      )}
    </>
  );
};

export default Modal;
