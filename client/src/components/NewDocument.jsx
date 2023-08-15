import React from "react";
import create from "../assets/create.png";
import Resume from "../assets/docs.png";
import Letter from "../assets/letter.png";
import Project from "../assets/project.png";
import Brochure from "../assets/brochure.png";
import dot from "../assets/three-dots-menu-svgrepo-com.svg";
import { Link, Navigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getMydocuments } from "../services/myDocumets";

function NewDocument() {
  const [myDocs, setmyDocs] = useState([]);
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    let tk = window.localStorage.getItem("token");
    let userDetails1 = window.localStorage.getItem("userData");


    if (!tk || !userDetails1) return <Navigate to="/login" />;
    setToken(tk);
    setUserDetails(JSON.parse(userDetails1));
  }, []);

  useEffect(() => {
    console.log('user adetails', userDetails?.userName)
    let docs = getMydocuments(userDetails?.userName, token).then((data) =>
      setmyDocs(data)
    );
  }, [userDetails]);

  return (
    <div className="h-80 bg-gray-50">
      <div className="flex pl-20 pr-20 pt-10 justify-between card">
        <div className="flex">
          <p>Start a new document</p>
        </div>
        <div className="flex">
          <img src={dot} alt="" className="w-5 cursor-pointer rotate-90" />
        </div>
      </div>
      <div className="flex pl-20 pr-20 pt-2 justify-between card-body">
        <Link to="/new">
          <div className="flex img-div">
            <img
              src={create}
              alt=""
              className="h-48  padding-img hover:border hover:border-blue-400 cursor-pointer"
            />
            <div className="relative top-48 right-36 card-text">
              <p>Blank</p>
            </div>
          </div>
        </Link>

        {myDocs &&
          myDocs.map((e) => (
            <Link to={`/documents/${e.documentId}`}>
              <div className="flex img-div">
                <img
                  src={Resume}
                  alt="Resume"
                  className="h-48 padding-img hover:border hover:border-blue-400 cursor-pointer"
                />
                <div className="relative top-48 right-36 card-text">
                  <p>{e.title}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default NewDocument;
