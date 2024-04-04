import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("globall@platformvisions.com");
  const [password, setPassword] = useState("7h71Sd7&z");
  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getWorkflow()
  }, [])

  async function getWorkflow() {
    setShowLoader(true);
    const callOptions = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        pageUuid: "bd420fb4-eb4c-11ee-a93b-b3046feab407",
      }),
    };
    const data2 = await fetch(
      "https://api.retool.com/v1/workflows/99974e13-a5c9-4062-bf3d-43a4f788f954/startTrigger?workflowApiKey=retool_wk_531699801b7e4f1b9d7144673e7476b5",
      callOptions
    );
    const res = await data2.json();
    setRetoolEmbedUrl(res.embedUrl);
    setShowLoader(false);
    // navigate('/retool', {loadingUrl: retoolEmbedUrl});
    console.info("retoolEmbedUrl", retoolEmbedUrl);
  }
  return (
    <div className="App p-5">
      <div className="container">
        
      </div>
      {retoolEmbedUrl != null && (
        <Navigate to="/retool" state={{ retoolEmbedUrl }} />
      )}

      {showLoader && (
        <div className="loader-overlay">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;