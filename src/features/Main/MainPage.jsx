import React,{ useState, useEffect } from "react";
import './MainPage.scss';
import { useSelector, useDispatch } from "react-redux";
import { setUsers, selectUser } from "./usersSlice";
import { getUsers } from "../../API/placeholder";
import Posts from "../Posts/Posts";
import ModalWindow from "../Modal/Modal";
import classNames from 'classnames';
 
export default function MainPage() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const response = getUsers();
    response.then(
      data => {
        return data.json();
      }
    ).then(
      dataJSON => {
        dispatch(setUsers(dataJSON));
      }
    ).catch(alert);
  }, [])


  return (
    <div className="main-page">
      <div className="container">
        <div className="users-list">
        {
          users.usersList.map(item => {
            return (
              <div
                className={classNames("list-item", {'selected': item.id === users.selectedUserId})}
              >
                <div className="id">{item.id}</div>
                <div className="name">{item.name}</div>
                <div
                  className="button posts-button"
                  onClick={() => dispatch(selectUser(item.id))}
                >Posts</div>
                <div
                  className="button album-button"
                  onClick={() => {dispatch(selectUser(item.id)); setShowModal(true);}}
                >
                  Albums
                </div>
                {
                  showModal
                  ? <ModalWindow id={users.selectedUserId} handleClose={setShowModal}/>
                  : ""
                }
              </div>
            )
          })
        }
        </div>
        {
          users.selectedUserId === 0
          ? ""
          : <Posts id={users.selectedUserId}/>
        }
      </div>
    </div>
  )
}