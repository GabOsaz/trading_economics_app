interface TableTitlePropTypes {
  title: string,
  extraClasses: string | null | undefined
}

function TableTitle({ title, extraClasses = 'mb-6' }: TableTitlePropTypes) {
  return (
    <h1 className={`text-center text-base md:text-xl ${extraClasses} font-semibold`}>{title}</h1>
  );
}

export default TableTitle;
