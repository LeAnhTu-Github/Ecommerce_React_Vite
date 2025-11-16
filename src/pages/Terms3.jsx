import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Terms3 = () => {
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
            onClick={() => navigate(-1)}
            className="font-medium text-sm cursor-pointer hover:underline"
          >
            Back
          </span>
        </div>

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Shipping Policy
        </h1>

        {/* CONTENT */}
        <section className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            All orders are processed within <strong>2 to 3 days</strong> and are
            delivered within <strong>3 to 7 business days</strong> (excluding
            weekends and holidays) after receiving your order confirmation
            email. You will receive another notification when your order has
            shipped.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Domestic Shipping Rates and Estimates
          </h2>
          <p>
            For calculated shipping rates: Shipping charges for your order will
            be calculated and displayed at checkout.
          </p>

          <h2 className="text-xl font-semibold mt-6">In-store Pickup</h2>
          <p>We do not offer in-store pickups.</p>

          <h2 className="text-xl font-semibold mt-6">International Shipping</h2>
          <p>We only sell in India (Domestic).</p>

          <h2 className="text-xl font-semibold mt-6">
            How do I check the status of my order?
          </h2>
          <p>
            When your order has shipped, you will receive an email notification
            from us which will include a tracking number you can use to check
            its status. Please allow <strong>48 hours</strong> for the tracking
            information to become available.
          </p>
          <p>
            If you haven’t received your order within <strong>12 days</strong>{" "}
            of receiving your shipping confirmation email, please contact us at{" "}
            <a
              href="mailto:united.deals.contact@gmail.com"
              className="text-orange-500 hover:underline"
            >
              united.deals.contact@gmail.com
            </a>{" "}
            with your name and order number, and we will look into it for you.
          </p>

          <p className="text-sm text-gray-600 mt-4">
            <strong>Address:</strong> A-3/B, S.G. Towers, Bhiringi Mondal Para,
            Benachity, Durgapur, Paschim Bardhaman, West Bengal, India-713213.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms3;
