import React, {useState,useEffect} from "react";
import { getAlbums } from '../../API/placeholder';
import './Modal.scss';

export default function ModalWindow(props) {

  const [albumsList, setAlbumsList] = useState([]);

  useEffect(() => {
    const response = getAlbums(props.id);
    response.then(
      data => {
        return data.json();
      }
    ).then(
      dataJSON => {
        setAlbumsList(dataJSON);
      }
    ).catch(alert);
  },[props.id]);

  return (
    <>
    <div
      className="blur-background"
      onClick={() => props.handleClose(false)}
    ></div>
    <div className="modal-window">
      {
        albumsList.map(item => {
          return(
            <div className="album-item">{item.title}</div>
          );
        })
      }
    </div>
    </>
  )
}