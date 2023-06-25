const TitlePageDetail = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="text-4xl tracking-[5px] font-medium uppercase py-10">
        {title}
      </h2>
      <h4 className="text-xl text-gray-500 font-medium py-5">{subTitle}</h4>
    </>
  );
};
export default TitlePageDetail;
