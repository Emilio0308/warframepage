const WeaponsButtonsPage = ( { setCurrentPage, currentPage , lastPage } ) => {

    const handlePlussPage = () => {
        const newPage = currentPage + 1;
        if (lastPage < newPage) {
          return;
        } else {
          setCurrentPage(newPage);
        }
      };
    
      const handleLessPage = () => {
        const newPage = currentPage - 1;
        if (newPage > 0) {
          setCurrentPage(newPage);
        }
      };
  return (
    <div className="grid grid-cols-[40px,_1fr,_40px]">
      <button onClick={handleLessPage}>{"<"}</button>
      <h4 className="text-center">Select a weapon</h4>
      <button onClick={handlePlussPage}>{">"}</button>
    </div>
  );
};
export default WeaponsButtonsPage;
