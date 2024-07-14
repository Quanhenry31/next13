"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
function Facebook() {
  const router = useRouter();

  const handleBack = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      router.push("/");
    } else {
      alert("You decided to stay on the page.");
    }
  };

  return (
    <div>
      facebook page
      <div>
        <Button variant="primary">quanhenrtu</Button>
        <button onClick={handleBack}>Back home</button>
      </div>
    </div>
  );
}

export default Facebook;
