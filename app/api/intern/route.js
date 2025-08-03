// app/api/intern/route.js
export async function GET() {
    const intern = {
      name: "Jatin bishtl",
      referralCode: "JAY123",
      totalContribution: 8500,
      monthlyContribution: [
        { month: "Jan", amount: 500 },
        { month: "Feb", amount: 800 },
        { month: "Mar", amount: 1000 },
        { month: "Apr", amount: 1200 },
        { month: "May", amount: 1500 },
        { month: "Jun", amount: 2000 },
        { month: "Jul", amount: 1500 },
      ],
    };
  
    return Response.json(intern);
  }
  