import React from "react";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
     return (
          <div className="h-full flex items-center justify-center text-white px-6">
               <div className="max-w-lg text-center space-y-6">

                    <div className="flex justify-center">
                         <div className="p-4 rounded-full bg-gray-800">
                              <Wrench size={40} />
                         </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold">
                         Site em Manutenção
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                         Estamos realizando algumas melhorias para oferecer uma experiência
                         melhor. O site estará disponível novamente em breve.
                    </p>

                    <div className="text-xs text-gray-500">
                         Obrigado pela sua paciência.
                    </div>

               </div>
          </div>
     );
}