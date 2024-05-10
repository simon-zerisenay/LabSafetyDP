import { Image } from "@nextui-org/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default function ExampleComponent() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-24  mx-auto">
      <Card className="px-4 py-10">
      
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200">Introducing AI Safety lab </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-300">Safeguard your lab with our Lab Safety Digital Software. Utilizing advanced computer vision, it monitors for compliance, alerts in real-time, and ensures safety protocol adherence. Explore its features today!</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
           
              <Card className="bg-gray-100 hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-6 rounded-lg h-full">
              <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/Capture.PNG" alt="content" width={720} height={400} />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-gray-400">Safety Equipment Detection</h2>
              <p className="leading-relaxed text-base">Utilize computer vision to identify the presence or absence of safety equipment like gloves, goggles, lab coats, and face shields.</p>
              </Card>
            
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
          <Card className="bg-gray-100 hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-6 rounded-lg h-full">
              <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/Capture.PNG" alt="content" width={721} height={401} />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-gray-400">Real-Time Monitoring</h2>
              <p className="leading-relaxed text-base"> Continuous surveillance of the laboratory space to detect safety compliance and violations.</p>
            </Card>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
          <Card className="bg-gray-100 hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-6 rounded-lg h-full">
              <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/Dashboard.jpg" alt="content" width={722} height={402} />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-gray-400">Data Analytics Dashboard</h2>
              <p className="leading-relaxed text-base">A dashboard providing insights into safety trends, violation statistics, and predictive analytics to prevent future violations.</p>
            </Card>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
          <Card className="bg-gray-100 hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-6 rounded-lg h-full">
              <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/Capture.PNG" alt="content" width={723} height={403} />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Alert System </h2>
              <p className="leading-relaxed text-base">Instant notifications and alarms when a violation or unsafe behavior is detected. This can include visual alerts on monitors, email notifications, or messages to a dedicated mobile application.</p>
            </Card>
          </div>
        </div>
      
      </Card>
      </div>
    </section>
  );
}
