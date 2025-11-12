import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function Terms2() {
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
          Privacy Policy
        </h1>

        <section className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            This Privacy Policy describes how <strong>United Deal</strong>{" "}
            ("we", "us", or "our") collects, uses, and discloses your personal
            information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes to our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on our
            site.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            2. Information We Collect
          </h2>
          <p>
            We may collect personal information that you provide directly to us,
            including your name, email address, phone number, billing
            information, and order details. We may also automatically collect
            certain information when you access our site, such as IP address,
            browser type, and device identifiers.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            3. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, process transactions, communicate with you, and comply
            with legal obligations. We may also use your information for
            marketing purposes with your consent.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            4. Sharing Your Information
          </h2>
          <p>
            We may share your personal information with trusted third-party
            service providers who assist us in operating our business, such as
            payment processors and analytics providers. We do not sell your
            personal information.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, including the right to access, correct,
            or delete your data. To exercise these rights, please contact us
            directly.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
            <br />
            <strong>Email:</strong> support@uniteddeal.com
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms2;
