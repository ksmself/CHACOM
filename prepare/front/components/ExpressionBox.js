/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import { PlusCircleFilled } from '@ant-design/icons';

import ConvertPopUp from './ConvertPopUp';

const expressionBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const box = css`
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 20px;
  border: 3px solid #18ddff;
  border-radius: 4px;

  input {
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #48494b;
  }
`;

const pinyinBox = css`
  position: relative;
  height: 52px;
  margin-bottom: 5px;

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 13px;
  }
`;

const plusBtn = css`
  svg {
    font-size: 50px;
    color: #3a18ff;
  }
`;

const ExpressionBox = () => {
  const [expressions, setExpressions] = useState([
    { expressionNumber: 1, pinyin: '', meaning: '' },
  ]);

  const addExpression = useCallback(() => {
    const data = {
      expressionNumber: expressions.length + 1,
      pinyin: '',
      meaning: '',
    };
    setExpressions([...expressions, data]);
  }, [expressions]);

  const onChangeText = useCallback(
    (expressionNum) => (e) => {
      const tempExpressions = expressions.map((expression) => {
        if (expressionNum === expression.expressionNumber) {
          expression[e.target.name] = e.target.value;
        }
        return expression;
      });
      setExpressions(tempExpressions);
    },
    [expressions]
  );

  return (
    <>
      <div css={expressionBox} id="expression-box">
        {expressions.map((v, index) => {
          return (
            <div css={box} key={v.expressionNumber}>
              <div css={pinyinBox}>
                <input
                  name="pinyin"
                  placeholder="한어병음을 입력해주세요"
                  value={v.pinyin}
                  onChange={onChangeText(index + 1)}
                />
                <ConvertPopUp />
              </div>
              <input
                name="meaning"
                placeholder="뜻을 입력해주세요"
                value={v.meaning}
                onChange={onChangeText(index + 1)}
              />
            </div>
          );
        })}
      </div>
      <PlusCircleFilled css={plusBtn} onClick={addExpression} />
    </>
  );
};

export default ExpressionBox;
