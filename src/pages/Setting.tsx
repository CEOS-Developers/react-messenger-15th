import ChatFooter from "components/layout/ChatFooter";
import ChatHeader from "components/layout/ChatHeader";
import SettingList from "components/setting/SettingList";

const Setting = () => {
  return (
    <>
      <ChatHeader title="Setting" />
      <SettingList />
      <ChatFooter />
    </>
  );
};

export default Setting;
