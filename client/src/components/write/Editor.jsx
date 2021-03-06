import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import Input from '../common/Input';

// hook 관련 라이브리러
import { useWriteField } from '../../hooks/write';

const EditorBlock = styled(Responsive)`
  width: 100%;
  position: relative;

  flex-direction: column;

  // 페이지 위아래 여백 지정
  ${({ theme }) => {
    return css`
      padding-top: ${theme.space[20]};
      padding-bottom: ${theme.space[20]};
    `;
  }}
`;

const TitleInput = styled(Input)`
  background: none;
  width: 100%;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes['3xl']};
      margin-bottom: ${theme.space[4]};
    `;
  }}
`;

const Quilwrapper = styled.div`
  // 최소 크기 지정 및 padding 제거
  .ql-editor {
    padding: 0;
    min-height: 320px;
    line-height: 1.5;
    ${({ theme }) => {
      return css`
        font-size: ${theme.fontSizes['md']};
      `;
    }}
  }

  .ql-editor.ql-blank::before {
    left: 0;
  }
`;

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const [{ title, body }, setChangeField, setInitialize] = useWriteField();

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        toolbar: [
          [{ header: 1 }, { header: 2 }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        setChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });

    quillInstance.current.root.innerHTML = body;
  }, []);

  const onChangeTitle = e => {
    setChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        underline
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <Quilwrapper>
        <div ref={quillElement} />
      </Quilwrapper>
    </EditorBlock>
  );
};

export default Editor;
