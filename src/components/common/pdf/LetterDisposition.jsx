import Logo from "../../../assets/ic_logo.png";
import QRCode from "react-qr-code";

const LetterDispsition = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-center space-x-4">
          <img src={Logo} alt="" className="w-[160px]" />
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              PEMERINTAH PROVINSI SULAWESI UTARA
            </h2>
            <h1 className="mt-3 text-5xl font-bold">DINAS PENDIDIKAN DAERAH</h1>
            <p className="mt-3">
              Jalan Dr. Sam Ratulangi No. 35, Telp (0431) 852240, 862485, 863184
            </p>
            <p>Facsimile 862485, 863184 Tromol Pos 56 95002</p>
            <p>Manado 95111</p>
          </div>
        </div>
        <div className="h-[2px]  bg-black mt-2"></div>
        <div className="h-[5px] mt-1 bg-black"></div>
        <div className="mt-2">
          <h3 className="text-xl font-bold text-center underline">
            LEMBAR DISPOSISI KEPALA DINAS
          </h3>
          <div className="mt-6">
            <div className="grid grid-cols-2">
              <div>Surat Dari :</div>
              <div>
                <span>Diterima Tanggal : </span> <span> Jam :</span>
              </div>
              <div>Nomor Surat :</div>
              <div>Tanggal Keluar :</div>
              <div>Tanggal Surat :</div>
              <div>Nomor Agenda :</div>
              <div>Sifat Surat : Rahasia</div>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-black mt-2"></div>
        <div className="mt-4">Perihal :</div>
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="w-full ">
              <h5 className="p-2 font-semibold text-center border border-r-0 border-black">
                DIARAHKAN KEPADA :
              </h5>
              <div>
                <div className="flex items-center mt-4">
                  <div className="w-20 h-10 border border-black"></div>
                  <p className="flex-1 font-semibold text-center">Sekretaris</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-20 h-10 border border-black"></div>
                  <p className="flex-1 font-semibold text-center">Sekretaris</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-20 h-10 border border-black"></div>
                  <p className="flex-1 font-semibold text-center">Sekretaris</p>
                </div>
              </div>
            </div>
            <div className="w-2 h-56 bg-black"></div>
            <div className="w-full ">
              <h5 className="p-2 font-semibold text-center border border-l-0 border-black">
                MENGHARAPKAN :
              </h5>
              <div className="ml-4">
                <div className="flex items-center mt-4">
                  <div className="flex items-center justify-center w-20 h-10 border border-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="flex-1 font-semibold text-center">Sekretaris</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-20 h-10 border border-black"></div>
                  <p className="flex-1 font-semibold text-center">Sekretaris</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-20 h-10 border border-black"></div>
                  <p className="flex-1 font-semibold text-center">Sekretaris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 mt-4 border-2 border-black">
          <p className="underline">Catatan :</p>
          <div className="flex justify-between p-8 mt-16 font-semibold text-center">
            <div>
              <QRCode value="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FIMG&psig=AOvVaw0fkrxXKgNitiwKDEjQ8YC6&ust=1704782232181000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCI9-2WzYMDFQAAAAAdAAAAABAE" />
            </div>

            <div>
              <div>
                <h6>KEPALA DINAS PENDIDIKAN DAERAH</h6>
                <h6>PROVINSI SULAWESI UTARA</h6>
              </div>
              <div className="mt-20">
                <h5 className="underline">Dr. FEMMY J.SULUH, M.Si</h5>
                <p>PEMBINA UTAMA MADYA</p>
                <p>NIP. 19700426 199010 2 001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterDispsition;
