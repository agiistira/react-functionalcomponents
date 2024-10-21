import React from "react";

function LoginStatus({ nama, statusLogin }) {
  if (statusLogin) {
    return (
      <div>
        <h1>Welcome,{nama}</h1>
      </div>
    );
  } else {
    return <h1>Selamat Datang, Silahkan Login terlebih dahulu</h1>;
  }
}

export default LoginStatus;
