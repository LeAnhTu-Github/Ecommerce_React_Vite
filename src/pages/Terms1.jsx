import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function Terms1() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 sm:p-10">
        <div className="flex items-center gap-2 mb-6">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span
            onClick={() => navigate("/")}
            className="font-medium text-sm cursor-pointer hover:underline"
          >
            Back
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Terms of Service
        </h1>

        <section className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <strong>United Deal</strong>. By accessing or using our
            website, you agree to comply with and be bound by the following
            Terms of Service. Please read them carefully before using our site.
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Overview</h2>
          <p>
            This website is operated by United Deal. The terms “we”, “us” and
            “our” refer to United Deal. These Terms apply to all users of the
            site, including browsers, customers, merchants, and contributors of
            content.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Online Store Terms</h2>
          <p>
            By agreeing to these Terms of Service, you confirm that you are at
            least the age of majority in your state or province of residence, or
            that you have given us your consent to allow any of your minor
            dependents to use this site.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. General Conditions</h2>
          <p>
            We reserve the right to refuse service to anyone for any reason at
            any time. You understand that your content (excluding credit card
            information) may be transferred unencrypted over networks.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            4. Accuracy and Completeness
          </h2>
          <p>
            We are not responsible if information made available on this site is
            not accurate, complete or current. Any reliance on the material on
            this site is at your own risk.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            5. Modifications to Service and Prices
          </h2>
          <p>
            Prices for our products are subject to change without notice. We
            reserve the right to modify or discontinue the Service at any time
            without notice.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms1;
