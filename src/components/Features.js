import React from "react";
function Features() {
  const Num = [
    {
      id: 1,
      img: "/images/ux-interface.png",
      title: "بناء تجربة مستخدم مميزة",
      description:
        "نعمل على بناء رحلة المستخدم لتكون سهلة وفعالة وذات نتائج ايجابية لتحقيق اعلى نسبة تحويل لعملاء جدد.",
      display: "flex",
      flexDirection: "row",
      paddingRight: "50px"
    },
    {
      id: 2,
      img: "/images/measuring.png",
      title: "متوافق مع الهوية البصرية الخاصة بك",
      description:
        "نعمل على موقعك الالكتروني ليكون متوافق مع الهوية البصرية الخاصة بك وتوحيد الصورة الذهنية عند الجمهور المستهدف",
      display: "flex",
      flexDirection: "row-reverse",
      paddingLeft: "50px"
    },
    {
      id: 3,
      img: "/images/speedometer.png",
      title: "سرعة واداء عالي في التحميل",
      description:
        "الرشاقة وسرعة التحميل أحد أهم معايير العمل عندنا في بناء المواقع الالكترونية",
      display: "flex",
      flexDirection: "row",
      paddingRight: "50px"
    },
    {
      id: 4,
      img: "/images/control.png",
      title: "لوحة تحكم كاملة للموقع",
      description:
        "نقدم أيضا لوحة تحكم كاملة للموقع وتعديل النصوص والصور ورفع الملفات",
      display: "flex",
      flexDirection: "row-reverse",
      paddingLeft: "50px"
    },
    {
      id: 5,
      img: "/images/responsive.png",
      title: "تصميم متوافق مع كافة الاجهزة والشاشات",
      description:
        "استجابة كاملة لكافة اجهزة الهواتف المحمولة واجهزة الحاسوب وقياسات شاشاتها",
      display: "flex",
      flexDirection: "row",
      paddingRight: "50px"
    },
    {
      id: 6,
      img: "/images/system-update.png",
      title: "مرن وقابل للتطوير",
      description:
        "نقوم ببناء المواقع الإلكترونية من البداية من قبل فريقنا التقني مما يتيح امكانية التطوير والتعديل والتوسع المستقبلي بكل سهولة.",
      display: "flex",
      flexDirection: "row-reverse",
      paddingLeft: "50px"
    }
  ];

  return (
    <div className=" font-Cai h-full lg:w-xll mx-auto w-82">
      <p className="text-center pt-36 text-5xl font-bold text-Co1">
        كل ما تحتاجه لتكون جزءً من العالم الرقمي
      </p>
      <div>
        <div className="">
          {Num.map((Num) => (
            <div
              data-aos={"zoom-in"}
              className="2xl:flex grid items-center pt-24 "
              key={Num.id}
              style={Num}
            >
              <div>
                <img
                  className=" hidden"
                  style={Num}
                  width={500}
                  src={Num.img}
                />
              </div>
              <div>
                <div className="text-right">
                  <h1 className="lg:text-4xl text-2xl text-Co2 font-bold lg:mb-12 mb-2">
                    {Num.title}
                  </h1>
                </div>
                <div>
                  <hr className="border-2 border-Co1"></hr>
                </div>
                <div className="text-right">
                  <p className="text-2xl max-w-3xl pt-6 font-semibold lg:leading-LH">
                    {Num.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Features;
