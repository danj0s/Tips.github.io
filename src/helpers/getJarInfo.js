import { FETCHURL, GETRESOURCE } from "../consts";

async function getJarInfo() {
  let jarInfo;
  const to = Date.now();
  const from = to - 100000000;
  await GETRESOURCE(`${FETCHURL.jarInfo}/${from}/${to}`, {
    method: "GET",
    headers: { "X-Token": "uyJhOlB9yDbyqbzhKq27AV2mmXcDzyEGLXF18GCJb76U" },
    mode: "cors",
  }).then((data) => {
    jarInfo = data[0];
  });
  console.log(jarInfo, "jar");
  return jarInfo;
}

export default getJarInfo;
