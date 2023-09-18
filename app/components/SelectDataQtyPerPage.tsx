interface SelectBtnType {
  setPostsPerPage: (arg0: number) => void
}

function SelectDataQtytPerPage({ setPostsPerPage }: SelectBtnType) {
  return (
    <div className="flex justify-end space-x-1 md:space-x-2 items-center my-6">
      <h2 className="text-xs md:text-sm"> Showing: </h2>
      <select
        onChange={(e) => setPostsPerPage(Number(e.target.value))}
        className="text-xs md:text-sm bg-transparent border border-opacity-75 border-cyan-300 rounded-[10px] p-2 cursor-pointer"
      >
        {[10, 20, 30, 40, 50].map((limit) => (
          <option key={limit} value={limit}>
            {limit}
            {' '}
            entries
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDataQtytPerPage;
