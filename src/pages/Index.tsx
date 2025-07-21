import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-slate-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-slate-800 mb-6 font-['Roboto']">
                Мастер на час
                <span className="block text-orange-500">в посёлке Российский</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 font-['Open_Sans']">
                Выполняю любые работы по дому как для себя. 
                Качественно, быстро и с гарантией.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                  <Icon name="Clock" size={20} className="text-orange-500" />
                  <span className="text-slate-700">Работаю 24/7</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                  <Icon name="Shield" size={20} className="text-orange-500" />
                  <span className="text-slate-700">Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                  <Icon name="MapPin" size={20} className="text-orange-500" />
                  <span className="text-slate-700">п. Российский</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать услугу
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/img/3012750b-c12a-494a-aaea-93d174b01ccc.jpg" 
                  alt="Профессиональный мастер с инструментами"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 font-['Roboto']">
            Обо мне
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-slate-600 leading-relaxed font-['Open_Sans']">
                Меня зовут <strong>Александр</strong>. Уже более 10 лет помогаю жителям 
                посёлка Российский решать бытовые вопросы.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-['Open_Sans']">
                Работаю по принципу "как для себя" — качественно, 
                аккуратно и с полной ответственностью за результат.
              </p>
              <div className="bg-gradient-to-r from-orange-500 to-slate-600 p-6 rounded-xl text-white">
                <p className="text-lg font-medium">
                  "Делаю всё как для себя — это мой главный принцип работы"
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <Icon name="Star" size={24} className="text-orange-500" />
                <span className="text-slate-700 font-medium">Опыт работы 10+ лет</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <Icon name="Users" size={24} className="text-orange-500" />
                <span className="text-slate-700 font-medium">500+ довольных клиентов</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <Icon name="Award" size={24} className="text-orange-500" />
                <span className="text-slate-700 font-medium">Гарантия на все работы</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center font-['Roboto']">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Icon name="Zap" size={48} className="text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Электрика</h3>
                <ul className="space-y-2 text-slate-600 font-['Open_Sans']">
                  <li>• Замена розеток и выключателей</li>
                  <li>• Подключение люстр</li>
                  <li>• Проводка в квартире</li>
                  <li>• Ремонт электроприборов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Icon name="Droplets" size={48} className="text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Сантехника</h3>
                <ul className="space-y-2 text-slate-600 font-['Open_Sans']">
                  <li>• Устранение засоров</li>
                  <li>• Замена смесителей</li>
                  <li>• Установка унитазов</li>
                  <li>• Ремонт труб</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Icon name="Home" size={48} className="text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Домашний ремонт</h3>
                <ul className="space-y-2 text-slate-600 font-['Open_Sans']">
                  <li>• Сборка мебели</li>
                  <li>• Поклейка обоев</li>
                  <li>• Мелкий ремонт</li>
                  <li>• Навешивание полок</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-slate-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-['Roboto']">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-white">
                <Icon name="Phone" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Телефон</h3>
                <p className="text-lg font-['Open_Sans']">+7 (999) 123-45-67</p>
                <p className="text-sm opacity-80 mt-2">Звоните в любое время</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-white">
                <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Район работы</h3>
                <p className="text-lg font-['Open_Sans']">Посёлок Российский</p>
                <p className="text-sm opacity-80 mt-2">Выезжаю в течение часа</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-white text-slate-800 hover:bg-gray-100 px-12 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;