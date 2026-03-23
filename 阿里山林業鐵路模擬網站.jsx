import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Train, Map, Users } from "lucide-react";

export default function AlishanRailwaySite() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          阿里山林業鐵路模擬計畫
        </h1>
        <p className="text-gray-600">
          歡迎加入我們的模擬鐵道世界，體驗阿里山林鐵的魅力！
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 text-center">
            <Train className="mx-auto mb-3" size={40} />
            <h2 className="text-xl font-semibold mb-2">列車介紹</h2>
            <p className="text-gray-600">
              收錄阿里山林鐵各式列車與車輛資訊，持續更新中。
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 text-center">
            <Map className="mx-auto mb-3" size={40} />
            <h2 className="text-xl font-semibold mb-2">路線地圖</h2>
            <p className="text-gray-600">
              探索嘉義到阿里山的完整路線與各站資訊。
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 text-center">
            <Users className="mx-auto mb-3" size={40} />
            <h2 className="text-xl font-semibold mb-2">加入社群</h2>
            <p className="text-gray-600 mb-4">
              加入我們的 Discord，一起參與模擬與開發！
            </p>
            <a href="https://discord.gg/kQ3t7YneGs" target="_blank">
              <Button className="bg-green-700 text-white">
                前往 Discord
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          關於本計畫
        </h2>
        <p className="text-gray-700 leading-relaxed">
          本模擬計畫致力於重現阿里山林業鐵路的運行體驗，包含列車操作、
          路線建模與車站細節。我們歡迎所有對鐵道有興趣的玩家與開發者加入！
        </p>
      </section>

      <footer className="mt-12 text-center text-gray-500">
        © 2026 阿里山林業鐵路模擬計畫
      </footer>
    </div>
  );
}
