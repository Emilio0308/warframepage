import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../utils/getDate";
const PatchlogsComponent = ({ patchlogs }) => {
  return (
    <>
      <h4 className="uppercase py-3 text-xl">Patchlogs</h4>
      <article className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
        {patchlogs?.map((patchlog) => (
          <div
            className="bg-black/10 grid grid-rows-[70px,_1fr]"
            key={uuidv4()}
          >
            <div className="text-xl border-b-2 border-gray-700 bg-black text-white p-2">
              {patchlog.name}
            </div>
            <div className="grid grid-cols-2 items-center justify-items-center py-3 px-2">
              <div className="grid auto-rows-auto">
                <span>{patchlog.fixes}</span>
                <span>{patchlog.changes}</span>
              </div>
              <div className="text-center">{getDate(patchlog.date)}</div>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};
export default PatchlogsComponent;
