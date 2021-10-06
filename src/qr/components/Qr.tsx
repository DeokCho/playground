import React from "react";
import { observer } from "mobx-react";
import QRCode from "react-qr-code";

import { useInjectStore, Button } from "src/components";

const Qr = () => {
  const { LoginStore } = useInjectStore();
  return (
    <div>
      <QRCode value={LoginStore.userUUID} />
      <br />
      <Button
        title="QR코드 재발급"
        onClick={LoginStore.resetUUid}
      />
    </div>
  );
};

export default observer(Qr);
