export const useNavbarConfig = () => {
  return [
    {
      title: "ЗАХ ЗЭЭЛ",
    },
    {
      title: "БИРЖ",
      child:true,
      mobileSubmenu:[
        {
          title:"Спот арилжаа",
          href:'/'
        },
        {
          title:"Фьючерс арилжаа",
          href:'/'
        }
      ]
    },
    {
      title: "OTC",
    },
    {
      title: "🔥 IHC",
    },
    {
        title:"🎁 УРАМШУУЛАЛ"
    }
  ];
};
