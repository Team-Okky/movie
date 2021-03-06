import { ContentDetail } from '@/types/common';
import React, { useState } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import Modal from '@/components/organisms/Modal';

type Props = {
  data: ContentDetail;
};

function SearchModal(props: Props) {
  const { data } = props;
  const [selectedContent, setSelectedContent] = useState<number | undefined>(undefined);
  const selectContent = (id: number) => setSelectedContent(id);

  return (
    <>
      <ul key={data.id} style={{ listStyle: 'none', paddingLeft: 0, marginTop: 0, marginBottom: 0 }}>
        <li key={data.id} style={{ marginBottom: '3%' }}>
          <div style={{ width: 290 }}>
            {data.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                alt={data.original_title}
                style={{ width: '95%', cursor: 'pointer' }}
                onClick={() => selectContent(data.id)}
              />
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '168.750px',
                  fontSize: '8rem',
                  paddingTop: 0,
                  cursor: 'pointer',
                }}
                onClick={() => alert(`${data.id}\n${data.original_title}\nThere is no backdrop_path`)}
              >
                <GithubOutlined />
              </div>
            )}
          </div>
        </li>
      </ul>
      {selectedContent && <Modal contentId={selectedContent} onClickHandler={() => setSelectedContent(undefined)} />}
    </>
  );
}

export default SearchModal;
