import { BatLine, BatOutput } from "./BatOutput";
import { SectionTitle } from "./SectionTitle";

export function WorkScopeSection() {
  return (
    <section>
      <SectionTitle>scope.md</SectionTitle>
      <BatOutput file="scope.md">
        <BatLine line={1}>
          Saya membangun <span className="text-success">REST API</span> dengan{" "}
          <span className="text-success">Node.js/Express.js</span> dan
          menghubungkannya ke frontend <span className="text-info">React</span>.
        </BatLine>
        <BatLine line={2}>
          Saya menangani desain database, autentikasi/autorisasi, validasi,
          error handling, dan integrasi API.
        </BatLine>
        <BatLine line={3}>
          Saya menjaga kode tetap rapi, mudah dirawat, dan siap diuji atau
          deploy.
        </BatLine>
      </BatOutput>
    </section>
  );
}
