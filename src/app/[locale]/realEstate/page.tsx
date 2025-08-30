import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import Link from "@/components/link";
import Form from "./_components/Form";

export default async function RealEstatePage() {
  const locale = await getCurrentLocale();
  const { realEstate } = await getTrans(locale);

  return (
    <main className="container mt-24  space-y-12">
      {/* <Link href={`/${locale}/${Routes.REAL_ESTATE}`}>
        <h1 className="text-lg md:text-2xl font-semibold text-primary hover:text-secondary text-center">
        {realEstate.title}
      </h1>
      </Link> */}
      {/* Hero Section */}
      <section className="text-center py-6">
        <h1 className="text-4xl font-bold mb-4">التسويق العقاري في بورسعيد</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          اكتشف أحدث العقارات، من الشقق والفيلات إلى الشاليهات والمشاريع
          الاستثمارية الكبرى.
        </p>
        {/* <Button size="lg" className="rounded-2xl">
          تصفح العروض
        </Button> */}
      </section>

      {/* Overview Section */}
      <section className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <span className="text-4xl">🏠</span>
          <Link href={`/${locale}/${Routes.REAL_ESTATE}/${Pages.APARTMENT}`}>
            <p>{realEstate.APARTMENT} </p>
          </Link>
        </div>
        <div>
          <span className="text-4xl">🌊</span>
          <p>شاليهات وسياحة</p>
        </div>
        <div>
          <span className="text-4xl">🏢</span>
          <p>وحدات تجارية</p>
        </div>
        <div>
          <span className="text-4xl">🌳</span>
          <p>أراضي</p>
        </div>
      </section>

      {/* Featured Properties */}
      {/* <section className="container">
        <h2 className="text-2xl font-semibold mb-6">العقارات المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["شقة - حي الزهور", "فيلا - حي الشرق", "شاليه - حي الشرق"].map(
            (title, i) => (
              <Card key={i} className="rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">تفاصيل قصيرة عن العقار</p>
                  <Button variant="secondary" className="rounded-xl">
                    تفاصيل
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section> */}

      {/* Major Projects */}
      <section className="container">
        <h2 className="text-2xl font-semibold mb-6">المشاريع الكبرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Porto Said Compound", "Tower Bay", "Downtown Compound"].map(
            (project, i) => (
              <Card key={i} className="rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle>{project}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">وصف مختصر للمشروع العقاري</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>
      <Form />
    </main>
  );
}
