import stripe from "stripe";

const stripeController = async (req, res)=> {
    const stripeInstance = stripe(process.env.STRIPE_KEY)
    const { purchase, total_amount, shipping_fee } = req.body;

    const calculateOrderAmount = () => {
        return total_amount + shipping_fee
    }

    const paymentIntent = await stripeInstance.paymentIntents.create ({
        amount: calculateOrderAmount(),
        currency: 'usd'
    })

    console.log(paymentIntent);

    res.json({clientSecret: paymentIntent.client_secret})

}

export default stripeController