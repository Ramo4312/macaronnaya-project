import React, { useEffect, useState } from 'react'
import popularDish from '../images/image 97.svg'
import minus from '../images/minus.svg'
import plus from '../images/plus.svg'

const BasketPage = () => {
	const dishes = [
		{
			id: 1,
			title: 'Спагетти с курицей и с грибами',
			desc: 'Описание:Паста в сливочном соусе – рецепт изысканного итальянского блюда с нежным молочным привкусом и тонким ароматом специй.',
			image: popularDish,
			price: 288,
			count: 1,
		},
		{
			id: 2,
			title: 'Спагетти с курицей',
			desc: 'Описание:Паста в сливочном соусе – рецепт изысканного итальянского блюда с нежным молочным привкусом и тонким ароматом специй.',
			image: popularDish,
			price: 288,
			count: 1,
		},
		{
			id: 3,
			title: 'Спагетти с курицей и с грибами',
			desc: 'Описание:Паста в сливочном соусе – рецепт изысканного итальянского блюда с нежным молочным привкусом и тонким ароматом специй.',
			image: popularDish,
			price: 288,
			count: 1,
		},
	]

	const [totalPrice, setTotalPrice] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		let totalPrice = 0
		let count = 0
		dishes?.reduce((prev, next) => (totalPrice = prev + next.price), totalPrice)
		setTotalPrice(totalPrice)
		dishes?.forEach((item, index) => {
			count = index + 1
		})
		setCount(count)
	}, [])

	console.log(totalPrice)

	return (
		<div className='w-[88vw] mx-auto mt-8 mb-10 px-8 py-9 bg-my-light-gray rounded-2xl shadow-[-6px_-4px_19px_rgba(0,0,0,0.25),_7px_8px_16px_rgba(0,0,0,0.25)]'>
			<h2 className='text-[40px] text-my-brown mb-14 sm:mb-10'>Корзина</h2>
			<div className='w-full px-4 py-3 flex justify-between mb-6 bg-[#F8F8F8] rounded-2xl shadow-[-3px_2px_8px_rgb(0,0,0,0.25)]'>
				<div className=''>
					<p className='font-montserrat font-medium'>
						Будет доставлен через : 1 час
					</p>
					<p className='font-montserrat font-medium'>
						Количество товара: {count}
					</p>
				</div>
				<div className='flex items-end'>
					<p className='text-black text-xl font-semibold font-montserrat'>
						Итоги:
						<span className='text-my-orange ml-2'>{totalPrice}сом</span>
					</p>
				</div>
			</div>
			<div className='basket-card-container h-[450px] overscroll-none overflow-scroll rounded-2xl py-3 pr-4 mb-10 bg-[#e2e2e2]'>
				{dishes?.map(item => (
					<div
						className='flex flex-row justify-between items-center border-b-4 border-b-my-brown border-dashed px-24 py-6 '
						key={item.id}
					>
						<div className=''>
							<img src={item.image} alt='' className='w-36' />
						</div>
						<div className=' w-[537px] flex flex-col gap-y-3'>
							<h4 className='text-my-brown font-semibold text-2xl'>
								{item.title}
							</h4>
							<h5 className='text-my-brown font-semibold'>{item.desc}</h5>
						</div>
						<div className='flex flex-col items-center gap-y-6'>
							<h3 className='text-my-orange text-3xl text-montserrat'>
								{item.price} с
							</h3>
							<div className='flex gap-x-3 items-end'>
								<img src={minus} alt='' />
								<p className='text-my-brown text-3xl text-montserrat'>
									{item.count}
								</p>
								<img src={plus} alt='' />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='w-full flex flex-row justify-between pr-11'>
				<p className='text-my-orange text-4xl'>{totalPrice} сом</p>
				<button className='bg-my-orange text-white py-4 px-[5.2vw] text-4xl rounded-[32px]'>
					Заказать
				</button>
			</div>
		</div>
	)
}

export default BasketPage
