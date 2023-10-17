import useEventListener from "./useEventListener";

export default function useTabClose() {
  const handleTabClose = event => {
    event.preventDefault();
    console.log('beforeunload event triggered');
    return (event.returnValue = 'Are you sure you want to exit?');
  };
  const handleTabCloseKeyboard = event => {
    event.preventDefault();
    const condition = (event.ctrlKey && (event.key === 'W' || event.key === 'w'));
    if (condition)
      return (event.returnValue = 'Are you sure you want to navigate away from this page?');
  }
  const handleTabCloseMouseMiddle = e => { if (e.button === 1) e.preventDefault(); }

  useEventListener('beforeunload', handleTabClose);
  useEventListener("keydown", handleTabCloseKeyboard)
  useEventListener("auxclick", handleTabCloseMouseMiddle);
}
