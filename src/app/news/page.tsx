"use client";
// import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import data from "@/components/dataNews";

export default function StructureLetters() {
  // دالة لتحويل النص إلى صوت
  const readText = (text: string) => {
    if (typeof window !== "undefined") {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // يمكنك تغيير اللغة هنا إذا لزم الأمر
      const voices = window.speechSynthesis.getVoices();
  
      utterance.rate = 0.75; // سرعة الكلام
      utterance.pitch = 1; // نغمة الصوت
      utterance.voice = voices.find(voice => voice.name === 'Google UK English Female') || voices[2];
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="mt-28">
  

      <h2 className="text-center font-bold text-xl md:text-4xl my-4">
        أحدث الأخبار
      </h2>

      {data &&
        data.map((d) => (
          <div key={d.id} className="p-4">
            <NewsCard
              letter={{
                id: d.id,
                title: d.Letter,
                image: d.image,
                trans: d.voice,
                use: d.Word,
                description: d.Sentence,
                example: "",
                exampleTranslation: "",
                example1: "",
                example1Translation: "",
              }}
              readText={() =>
                readText(`${d.Letter}. ${d.Word}. ${d.Sentence}`)
              } // تمرير دالة readText
            />
          </div>
        ))}
    </div>
  );
}
