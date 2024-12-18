"use client";

import React, { useState } from "react";
import InputModal from "@/components/InputModal";
import QrScannerModal from "@/components/QrScannerModal";
import Image from "next/image";
import { BsQrCodeScan } from "react-icons/bs";

import { useConnectedWallets } from "thirdweb/react";

export default function Hero(){
  const [modalOpen, setModalOpen] = useState(false);
  const [qrScannerModalOpen, setQrScannerModalOpen] = useState(false);

  const wallets = useConnectedWallets();
  const isWalletConnected = wallets.length > 0;

  return (
    <section id="scan">
      <div className="scan text container h-auto flex flex-col items-center justify-self-center text-center py-20 mt-32">
        <h1 className="grid text-6xl text-black my-8 gap-y-3 leading-relaxed">
          SCAN YOUR QR OR <br />
          BARCODE HERE
        </h1>
        <div className="btn-scan flex my-14 space-x-4">
          <button
            className={`px-10 py-5 text-white bg-[#1402FE] hover:bg-[rgba(20,2,254,0.2)] hover:text-[#1402FE] hover:ring-2 hover:ring-[#1402FE] 
                rounded-full transition-all ease-linear ${
                  !isWalletConnected
                    ? "cursor-not-allowed opacity-100"
                    : "cursor-pointer"
                }`}
            onClick={() => setModalOpen(true)}
            disabled={!isWalletConnected}
          >
            Input Code
          </button>
          <button
            className={`p-5 text-white bg-[#1402FE] hover:bg-[rgba(20,2,254,0.2)] hover:text-[#1402FE] hover:ring-2 hover:ring-[#1402FE] rounded-full transition-all ease-linear ${
              !isWalletConnected
                ? "cursor-not-allowed opacity-100"
                : "cursor-pointer"
            }`}
            onClick={() => setQrScannerModalOpen(true)}
            disabled={!isWalletConnected}
          >
            <BsQrCodeScan size={24} />
          </button>
        </div>
      </div>

      <div className="partner">
        <div className="grid border-dashed border-t-2">
          <div className="flex justify-center items-center text-black mt-2">
            Be Our Partner
          </div>
          <div className="images flex justify-center space-x-32 my-2">
            <Image
              src="/partner-logo.png"
              alt="partner-logo"
              width={130}
              height={90}
            />
            <Image
              src="/partner-logo.png"
              alt="partner-logo"
              width={130}
              height={90}
            />
            <Image
              src="/partner-logo.png"
              alt="partner-logo"
              width={130}
              height={90}
            />
            <Image
              src="/partner-logo.png"
              alt="partner-logo"
              width={130}
              height={90}
            />
            <Image
              src="/partner-logo.png"
              alt="partner-logo"
              width={130}
              height={90}
            />
          </div>
        </div>
      </div>

      <InputModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <QrScannerModal
        open={qrScannerModalOpen}
        onClose={() => setQrScannerModalOpen(false)}
      />
    </section>
  );
};
