import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export const MessageBox = ({ color , setDeal ,show, setShow, btnName , MessageTitle , Message , setDealMessageBox }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDealMessageBox('')
      setShow(false);
      console.log("ss");
    }, 4000);
    return () => clearInterval(intervalId)
  }, []);

  return (
    <>
      {show && (
        <Alert
          style={{
            position: "fixed",
            bottom: "0",
            right: "20px",
            width: "400px",
          }}
          variant={color}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>{MessageTitle}</Alert.Heading>
          <p>{Message}</p>
        </Alert>
      )}
    </>
  );
};
