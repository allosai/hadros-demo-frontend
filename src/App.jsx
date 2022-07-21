import React, { useState } from "react";
import "./App.css";
import Pie from "./components/pie";

function App() {
  const [anyev, setanyev] = useState(false);
  const [death, setdeath] = useState(false);
  const [checked_0, setChecked_0] = useState([false]);
  const [checked_1, setChecked_1] = useState([false, false, false]);
  const [checked_3, setChecked_3] = useState([false, false, false, false]);
  const [checked_4, setChecked_4] = useState([false, false, false]);

  const [checked_10, setChecked_10] = useState([false]);
  const [checked_11, setChecked_11] = useState([false, false, false]);
  const [checked_13, setChecked_13] = useState([false, false, false, false]);
  const [checked_14, setChecked_14] = useState([false, false, false]);

  const handleClick = (func, index, state) => {
    const arrtemp = [...state];
    arrtemp[index] = !arrtemp[index];
    func(arrtemp);
    console.log(arrtemp);
  };
  const names_0 = ["No Drugs"];
  const names_1 = ["NSAID", "COX2", "CELE"];
  const names_3 = ["1", "2", "3", "4"];
  const names_4 = ["1", "2", "3"];

  function allAreFalse(arr) {
    return arr.every((element) => element === false);
  }

  const PostRequest = async (arr1, arr2) => {
    const data = {
      Baseline: arr1,
      Treated: arr2,
    };
    console.log(data);

    const response = await fetch("https://hadrosdemo.herokuapp.com/getdata/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    console.log(body);
    setdeath(body.Death);
    setanyev(body.AnyEv);
  };

  const handleReq = () => {
    let arr1 = [];
    let arr2 = [];

    if (!allAreFalse(checked_0)) {
      arr1.push(0);
    } else {
      if (!allAreFalse(checked_1)) {
        arr1.push(1);
      }
      if (!allAreFalse(checked_3)) {
        arr1.push(3);
      }
      if (!allAreFalse(checked_4)) {
        arr1.push(4);
      }
    }
    if (!allAreFalse(checked_10)) {
      arr2.push(0);
    } else {
      if (!allAreFalse(checked_11)) {
        arr2.push(1);
      }
      if (!allAreFalse(checked_13)) {
        arr2.push(3);
      }
      if (!allAreFalse(checked_14)) {
        arr2.push(4);
      }
    }

    PostRequest(arr1, arr2);
  };

  return (
    <>
      <div className="titlename">Baseline</div>
      <div className="sel-group">
        {/* zeroth */}

        <div
          className={`dc-main ${
            allAreFalse(checked_0) ? "" : "dc-main-checked"
          }`}
        >
          <div className="dc-header">{"Control Group"}</div>
          <div className="dc-body">
            {names_0.map((name, index) => {
              return (
                <div
                  className={`dselect-wrap ${
                    checked_0[index] ? "ds-checked" : ""
                  }`}
                  key={index}
                  onClick={() => handleClick(setChecked_0, index, checked_0)}
                >
                  <div className="dselect-name">{name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* first */}
        {allAreFalse(checked_0) ? (
          <div
            className={`dc-main ${
              allAreFalse(checked_1) ? "" : "dc-main-checked"
            }`}
          >
            <div className="dc-header">{"Anti-Inflammatory Meds"}</div>
            <div className="dc-body">
              {names_1.map((name, index) => {
                return (
                  <div
                    className={`dselect-wrap ${
                      checked_1[index] ? "ds-checked" : ""
                    }`}
                    key={index}
                    onClick={() => handleClick(setChecked_1, index, checked_1)}
                  >
                    <div className="dselect-name">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="dc-main cgroup">
            Can't Simultaneously Select the Control Group (No&nbsp;drugs) and Another
            Group of Drugs
          </div>
        )}
        {allAreFalse(checked_0) ? (
          <div
            className={`dc-main ${
              allAreFalse(checked_3) ? "" : "dc-main-checked"
            }`}
          >
            <div className="dc-header">{"Anti-Inflammatory Systemic Steroids"}</div>
            <div className="dc-body">
              {names_3.map((name, index) => {
                return (
                  <div
                    className={`dselect-wrap ${
                      checked_3[index] ? "ds-checked" : ""
                    }`}
                    key={index}
                    onClick={() => handleClick(setChecked_3, index, checked_3)}
                  >
                    <div className="dselect-name">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="dc-main cgroup">
            Can't Simultaneously Select the Control Group (No&nbsp;drugs) and Another
            Group of Drugs
          </div>
        )}

        {allAreFalse(checked_0) ? (
          <div
            className={`dc-main ${
              allAreFalse(checked_4) ? "" : "dc-main-checked"
            }`}
          >
            <div className="dc-header">{"btsDMARD"}</div>
            <div className="dc-body">
              {names_4.map((name, index) => {
                return (
                  <div
                    className={`dselect-wrap ${
                      checked_4[index] ? "ds-checked" : ""
                    }`}
                    key={index}
                    onClick={() => handleClick(setChecked_4, index, checked_4)}
                  >
                    <div className="dselect-name">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="dc-main cgroup">
            Can't Simultaneously Select the Control Group (No&nbsp;drugs) and Another
            Group of Drugs
          </div>
        )}
      </div>
      {/* GROUP 2 */}
      <div className="titlename">Evaluative</div>
      <div className="sel-group">
        {/* zeroth */}
        <div className="dc-main">
          <div className="dc-header">{"Control Group"}</div>
          <div className="dc-body">
            {names_0.map((name, index) => {
              return (
                <div
                  className={`dselect-wrap ${
                    checked_10[index] ? "ds-checked" : ""
                  }`}
                  key={index}
                  onClick={() => handleClick(setChecked_10, index, checked_10)}
                >
                  <div className="dselect-name">{name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* first */}
        {allAreFalse(checked_10) ? (
          <div className="dc-main">
            <div className="dc-header">{"Anti-Inflammatory Meds"}</div>
            <div className="dc-body">
              {names_1.map((name, index) => {
                return (
                  <div
                    className={`dselect-wrap ${
                      checked_11[index] ? "ds-checked" : ""
                    }`}
                    key={index}
                    onClick={() =>
                      handleClick(setChecked_11, index, checked_11)
                    }
                  >
                    <div className="dselect-name">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="dc-main cgroup">
            Can't Simultaneously Select the Control Group (No&nbsp;drugs) and Another
            Group of Drugs
          </div>
        )}
        {/* third */}
        {allAreFalse(checked_10) ? (
          <div className="dc-main">
            <div className="dc-header">{"Anti-Inflammatory Systemic Steroids"}</div>
            <div className="dc-body">
              {names_3.map((name, index) => {
                return (
                  <div
                    className={`dselect-wrap ${
                      checked_13[index] ? "ds-checked" : ""
                    }`}
                    key={index}
                    onClick={() =>
                      handleClick(setChecked_13, index, checked_13)
                    }
                  >
                    <div className="dselect-name">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="dc-main cgroup">
            Can't Simultaneously Select the Control Group (No&nbsp;drugs) and Another
            Group of Drugs
          </div>
        )}
        {/* fourth */}
        {allAreFalse(checked_10) ? (
          <div className="dc-main">
            <div className="dc-header">{"btsDMARD"}</div>
            <div className="dc-body">
              {names_4.map((name, index) => {
                return (
                  <div
                    className={`dselect-wrap ${
                      checked_14[index] ? "ds-checked" : ""
                    }`}
                    key={index}
                    onClick={() =>
                      handleClick(setChecked_14, index, checked_14)
                    }
                  >
                    <div className="dselect-name">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="dc-main cgroup">
            Can't Simultaneously Select the Control Group (No&nbsp;drugs) and Another
            Group of Drugs
          </div>
        )}
      </div>
      <div className="button-fetch">
        <button onClick={handleReq}>Calculate Results</button>
      </div>
      <div className="results">
      </div>
      <div className="pie-contain">
        <Pie prob={0.6121293109283} text="AnyEv"/>
        <Pie prob={0.4332419411233} text="Death"/>
      </div>
    </>
  );
}

export default App;
