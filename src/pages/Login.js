import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Retool from "react-retool";
import logo from "../assets/images/gcrm-icon.png";

const Login = () => {
  const [email, setEmail] = useState("globall@platformvisions.com");
  const [password, setPassword] = useState("7h71Sd7&z");
  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [text, setText] = useState('default');

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 4000);
    getWorkflow();
  }, [])

  async function getWorkflow() {
    console.info('workflow started')
    const callOptions = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        pageUuid: "40e10d5a-911c-11ef-8c09-6f609c3c0072",
      }),
    };
    const data2 = await fetch(
      "https://api.retool.com/v1/workflows/99974e13-a5c9-4062-bf3d-43a4f788f954/startTrigger?workflowApiKey=retool_wk_531699801b7e4f1b9d7144673e7476b5",
      callOptions
    );
    const res = await data2.json();
    setRetoolEmbedUrl(res.embedUrl);
    console.info("retoolEmbedUrl", retoolEmbedUrl);
  }
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      {showLoader && (
        <div className="fullPage">
          <div className="image-container">
            <img className="logo" src={logo} />
          </div>
        </div>
      )}
        
      {retoolEmbedUrl != null && (
        // <Navigate to="/retool" state={{ retoolEmbedUrl }} />
        <Retool url={retoolEmbedUrl} />
      )}
    </div>
  );
};

export default Login;
