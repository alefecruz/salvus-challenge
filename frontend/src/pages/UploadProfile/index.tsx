import React, { useState, useCallback, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Conteiner, LogoContent } from './styles';
import logoImg from '../../assets/logo.svg';

import BTNuser from '../../assets/BTNuser.svg';
import BTNcamera from '../../assets/BTNcamera.svg';
import BTNupload from '../../assets/BTNupload.svg';

interface Documents {
  doc: string;
  id: string;
}

const Register: React.FC = () => {
  const token = localStorage.getItem('token');
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar'));
  const [documents, setDocuments] = useState<Documents[]>([]);

  useEffect(() => {
    api
      .get('document', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDocuments(response.data);
      });
  }, [token]);

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api
          .patch('user/avatar', data, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const avatarUrl = `http://localhost:3333/files/${response.data.avatar}`;
            setAvatar(avatarUrl);
            localStorage.setItem('avatar', avatarUrl);
          });
      }
    },
    [token],
  );

  const handleDocumentAdd = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('docs', e.target.files[0]);

        api
          .post('document', data, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const newDocument = response.data;
            setDocuments([...documents, newDocument]);
          });
      }
    },
    [token, documents],
  );

  const handleDocumentDelete = useCallback(
    (doc: string) => {
      console.log(doc);
      if (doc) {
        api
          .delete(`document/${doc}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
            const newDocuments = documents.filter(
              (document) => document.doc !== doc,
            );
            setDocuments(newDocuments);
          });
      }
    },
    [token, documents],
  );

  return (
    <>
      <LogoContent>
        <img className="logo" src={logoImg} alt="Salvus" />
      </LogoContent>
      <Conteiner>
        <Link to="/dashboard" className="btn-secundary">
          Ir para Dashboard
        </Link>
        <hr />
        <h5>Upload de Avatar</h5>
        <div className="profile">
          <img
            src={
              avatar === 'http://localhost:3333/files/null' || avatar === null
                ? BTNuser
                : avatar
            }
            alt="user"
          />
          <label htmlFor="avatar">
            <img className="camera" src={BTNcamera} alt="camera" />

            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>
        </div>
        <hr />
        <h5>Upload de Documentos</h5>
        <div className="documents">
          <input
            type="file"
            name="file"
            id="file"
            className="inputfile"
            onChange={handleDocumentAdd}
          />
          <label htmlFor="file">
            <h6>Enviar novo arquivo</h6>
            <img className="upload" src={BTNupload} alt="upload" />
          </label>
          <ul>
            {documents.map((document) => (
              <li key={document.doc}>
                <button
                  type="button"
                  onClick={() => handleDocumentDelete(document.doc)}
                >
                  Deletar
                </button>
                <a
                  href={`http://localhost:3333/docs/${document.doc}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="docName">
                    Visalizar Documento:
                    <br />
                    {document.doc}
                  </h5>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Conteiner>
      <footer>
        <hr />
        <div>
          <span>Make by: Álefe Cruz</span>
          <span>© 2020</span>
        </div>
      </footer>
    </>
  );
};

export default Register;
