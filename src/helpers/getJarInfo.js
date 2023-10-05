import { FETCHURL, GETRESOURCE } from "../consts";

async function getJarInfo() {
  let jarInfo;
  const to = Date.now();
  const from = to - 1000000000;
  await GETRESOURCE(`${FETCHURL.jarInfo}/${from}/${to}`, {
    method: "GET",
    headers: { "X-Token": "uyJhOlB9yDbyqbzhKq27AV2mmXcDzyEGLXF18GCJb76U" },
    mode: "cors",
  }).then((data) => {
    jarInfo = data[0];
  });
  return jarInfo;
}

export default getJarInfo;
