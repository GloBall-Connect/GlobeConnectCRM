import { useState, useEffect } from "react";
import Retool from "react-retool";
import { useLocation } from "react-router-dom";

const RetoolHome = ({ loadingUrl }) => {
  const { state } = useLocation();
  // const [email, setEmail] = useState("globall@platformvisions.com");
  // const [password, setPassword] = useState("7h71Sd7&z");
  const [retoolEmbedUrl, setRetoolEmbedUrl] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if(window.location.reload()) {
        getWorkflow();
        console.info('yes');    
    }
  }, []);

  async function getWorkflow() {
    setShowLoader(true);
    const callOptions = {
      method: "POST",
      body: JSON.stringify({
        pageUuid: "40e10d5a-911c-11ef-8c09-6f609c3c0072",
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
    <div style={{ height: "100dvh" }}>
        {state.retoolEmbedUrl && (
            <Retool url={state.retoolEmbedUrl} />
        )}
        {retoolEmbedUrl && (
          <Retool url={retoolEmbedUrl} />
        )}
    </div>
  );
};

export default RetoolHome;
