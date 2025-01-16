"use server";

interface FormData {
  name: string;
  furigana: string;
  company: string;
  position: string;
  tel: string;
  mail: string;
  inquiry_detail: string;
  inquires: {
    [key: string]: boolean;
  };
}

export const sendFormDataToHubSpot = async (data: FormData) => {
  // trueの値だけを抽出してセミコロン区切りの文字列を作成
  const selectedInquiries = Object.keys(data.inquires)
    .filter((key) => data.inquires[key]) // trueのものだけ取得
    .join(";"); // セミコロンで結合

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "fullname", // HubSpotフィールド名
            value: data.name, // 引数で受け取ったデータを使う
          },
          {
            objectTypeId: "0-1",
            name: "furigana",
            value: data.furigana,
          },
          {
            objectTypeId: "0-1",
            name: "company",
            value: data.company,
          },
          {
            objectTypeId: "0-1",
            name: "position",
            value: data.position,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: data.tel,
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: data.mail,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: data.inquiry_detail,
          },
          {
            objectTypeId: "0-1",
            name: "inquires_type",
            value: selectedInquiries,
          },
        ],
      }),
    }
  );

  try {
    await response.json();
  } catch (error) {
    console.error("Error sending data to HubSpot:", error);
    throw error; // エラーを投げて呼び出し元に通知
  }
};
