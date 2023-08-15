import React from "react";
import folder from "../assets/folder-fill-1789-svgrepo-com.svg";
import list from "../assets/list-svgrepo-com.svg";
import resume from "../assets/resume-docs-copy.png";
import logo from "../assets/docs.png";
import dot from "../assets/three-dots-menu-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getMydocuments } from "../services/myDocumets";

function RecentDocuments() {
  const [myDocs, setmyDocs] = useState([]);

  useEffect(() => {
    let docs = getMydocuments("ArjunKV").then((data) => setmyDocs(data));
  }, []);
  console.log(myDocs, "Ths is my docs");

  return (
    <>
      <div className="flex justify-between pl-14 pr-14 pt-4">
        <div className="flex">
          <h1>Recent documents</h1>
        </div>
        <div className="flex gap-3">
          <div>
            <img src={list} alt="" className="h-5 cursor-pointer" />
          </div>
          <div>
            <img src={folder} alt="" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>

      {myDocs &&
        myDocs.map((e) => (
          <div className="cursor-pointer mb-6 mt-4 ml-10 col-md-2">
            <div className="flex">
              <Link to={`/documents/${e.documentId}`}>
                <img src={resume} alt="" className="w-48" />
              </Link>
            </div>
            <div className="ml-1">
              <p>documents</p>
            </div>
            <div className="flex gap-10">
              <div className="flex">
                <div>
                  <img src={logo} alt="" className="h-5" />
                </div>
                <div>
                  <p className="text-xs font-normal">Opened 7:20 PM</p>
                </div>
              </div>
              <div>
                <img src={dot} alt="" className="h-3 rotate-90 ml-7" />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default RecentDocuments;
