import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

interface Barang {
  namaBarang: string;
  kuantitas: number;
  satuanKuantitas: string;
  hargaBarang: number;
}

interface FormData {
  nomerCustomer: string;
  nomerNota: string;
  nomerSeriNota: string;
  tanggal: string;
  jam: string;
  barang: Barang[];
  potongan: number;
  bayar: number;
}

const Rec1 = () => {
  const paperRef = useRef<HTMLDivElement | null>(null);
  const [datas, setDatas] = useState<FormData>({
    nomerCustomer: "022 04-Rofiq",
    nomerNota: "0",
    nomerSeriNota: "JL2407-0000812",
    tanggal: "18/07/2024",
    jam: "08:25:18",
    barang: [
      {
        namaBarang: "RM ARDEN 8X10",
        kuantitas: 2,
        satuanKuantitas: "BOX",
        hargaBarang: 17500,
      },
    ],
    potongan: 10000,
    bayar: 50000,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const handleBarangChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newBarang = datas.barang.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setDatas({
      ...datas,
      barang: newBarang,
    });
  };
  const addBarang = () => {
    setDatas({
      ...datas,
      barang: [
        ...datas.barang,
        { namaBarang: "", kuantitas: 0, satuanKuantitas: "", hargaBarang: 0 },
      ],
    });
  };

  const removeBarang = (index: number) => {
    const newBarang = datas.barang.filter((_, i) => i !== index);
    setDatas({
      ...datas,
      barang: newBarang,
    });
  };

  const handlePrint = useReactToPrint({
    contentRef: paperRef,
  });

  return (
    <>
      <h1 className='font-bold text-3xl'>UD MAJU JAYA</h1>
      <p>Buat Nota</p>

      <div className='divider' />

      <section className="flex gap-20">
        <div>
          <div>
            <label>Nomer Customer:</label>
            <br />
            <input
              className='input input-bordered w-full max-w-xs input-sm'
              type='text'
              name='nomerCustomer'
              value={datas.nomerCustomer}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Nomer Nota:</label>
            <br />
            <input
              className='input input-bordered w-full max-w-xs input-sm'
              type='text'
              name='nomerNota'
              value={datas.nomerNota}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Nomer Seri Nota:</label>
            <br />
            <input
              className='input input-bordered w-full max-w-xs input-sm'
              type='text'
              name='nomerSeriNota'
              value={datas.nomerSeriNota}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Tanggal:</label>
            <br />
            <input
              className='input input-bordered w-full max-w-xs input-sm'
              type='text'
              name='tanggal'
              value={datas.tanggal}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Jam:</label>
            <br />
            <input
              className='input input-bordered w-full max-w-xs input-sm'
              type='text'
              name='jam'
              value={datas.jam}
              onChange={handleInputChange}
            />
          </div>
          <div className='mt-10 mb-2 border border-black p-2 rounded w-fit'>
            {datas.barang.map((item, index) => (
              <div key={index}>
                <label>Nama Barang:</label>
                <br />
                <input
                  className='input input-bordered w-full max-w-xs input-sm'
                  type='text'
                  name='namaBarang'
                  value={item.namaBarang}
                  onChange={(e) => handleBarangChange(index, e)}
                />
                <br />
                <label>Kuantitas:</label>
                <br />
                <input
                  className='input input-bordered w-full max-w-xs input-sm'
                  type='number'
                  name='kuantitas'
                  value={item.kuantitas}
                  onChange={(e) => handleBarangChange(index, e)}
                />
                <br />
                <label>Satuan Kuantitas:</label>
                <br />
                <input
                  className='input input-bordered w-full max-w-xs input-sm'
                  type='text'
                  name='satuanKuantitas'
                  value={item.satuanKuantitas}
                  onChange={(e) => handleBarangChange(index, e)}
                />
                <br />
                <label>Harga Barang:</label>
                <br />
                <input
                  className='input input-bordered w-full max-w-xs input-sm'
                  type='number'
                  name='hargaBarang'
                  value={item.hargaBarang}
                  onChange={(e) => handleBarangChange(index, e)}
                />
                <br />
                <br />
                <button
                  type='button'
                  onClick={() => removeBarang(index)}
                  className='btn btn-error text-white'>
                  Hapus Barang!
                </button>
              </div>
            ))}
          </div>
          <button type='button' onClick={addBarang} className='btn'>
            + Tambahkan Barang Baru
          </button>
          <br />
          <br />
          <div>
            <label>Potongan:</label>
            <br />
            <input
              className='input input-bordered w-full max-w-xs input-sm'
              type='number'
              name='potongan'
              value={datas.potongan}
              onChange={handleInputChange}
            />
            <br />
          </div>
          <div>
            <label>Bayar:</label>
            <br />
            <input
              className='input input-bordered w-full max-w-xs input-sm'
              type='number'
              name='bayar'
              value={datas.bayar}
              onChange={handleInputChange}
            />
          </div>
          <button
            className='btn btn-primary my-5'
            onClick={() => {
              handlePrint();
            }}>
            Print
          </button>
        </div>
        <div>
          <p>Contoh: </p>
          <div className='border border-black w-fit h-fit'>
            <div
              ref={paperRef}
              className='w-[287px] px-[30px] py-[40px] text-[12px] font-consola'>
              <div className='text-center'>
                <p className='font-consola text-[14px]'>UD MAJU JAYA</p>
                <p className='font-consola'>Jl A. Yani 37 Bangsalsari, Jember</p>
                <p className='font-consola'>telp 0331-711519 / wa</p>
              </div>
              <br />
              <div className='flex justify-between'>
                <p>Cust : {datas.nomerCustomer}</p>
                <p>NOTA {datas.nomerNota}</p>
              </div>
              <div className='flex justify-between'>
                <p>{datas.nomerSeriNota}</p>
                <p>{datas.tanggal}</p>
                <p>{datas.jam}</p>
              </div>
              <p className='text-center'>=================================H1</p>
              {datas?.barang?.map((item, index) => (
                <React.Fragment key={index}>
                  <p>{item.namaBarang}</p>
                  <div className='pl-2 flex justify-between'>
                    <p>
                      {item.kuantitas} {item.satuanKuantitas}x
                    </p>
                    <p>{item.hargaBarang.toLocaleString("en-US")} =Rp</p>
                    <p>
                      {(item.hargaBarang * item.kuantitas).toLocaleString("en-US")}
                    </p>
                  </div>
                </React.Fragment>
              ))}
              <p className='text-center'>
                ----------------------------------
              </p>
              <div className='pl-10 flex justify-between'>
                <div>
                  <p>QNT</p>
                  <p>TOTAL</p>
                  <p>POTONGAN</p>
                  <p>BAYAR</p>
                  <p>KEMBALI</p>
                </div>
                <div className='flex flex-col justify-end mr-20'>
                  <p>Rp.</p>
                  <p>Rp.</p>
                  <p>Rp.</p>
                  <p>Rp.</p>
                </div>
                <div className='text-right'>
                  <p>
                    {datas.barang.reduce((sum, item) => sum + Number(item.kuantitas), 0)}
                  </p>
                  <p>
                    {datas.barang
                      .reduce(
                        (sum, item) => sum + item.kuantitas * item.hargaBarang,
                        0
                      )
                      .toLocaleString("en-US")}
                  </p>
                  <p>{datas.potongan.toLocaleString("en-US")}</p>
                  <p>{datas.bayar.toLocaleString("en-US")}</p>
                  <p>
                    {(
                      datas.bayar -
                      (datas.barang.reduce(
                        (sum, item) => sum + Number(item.kuantitas) * Number(item.hargaBarang),
                        0
                      ) -
                        datas.potongan)
                    ).toLocaleString("en-US")}
                  </p>
                </div>
              </div>
              <p className='text-center'>==================================</p>
              <div className='flex justify-between'>
                <p>{Number(datas.barang.length)} items</p>
                <p>ASIA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rec1;
