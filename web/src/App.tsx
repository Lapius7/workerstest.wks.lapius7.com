import { HeroSection } from '@/components/arc/blocks/hero-section/hero-section';

export function App() {
	return (
		<main>
			<HeroSection
				variant="minimal"
				title={'作って、動かして、\n磨き続ける。'}
				description="lap7 のポートフォリオです。Web と自動化のツールを作っています。"
				primaryAction={{ label: 'lapius7.com', href: 'https://lapius7.com', external: true }}
				secondaryAction={null}
				meta={['Web', '自動化', 'ツール開発']}
			/>
		</main>
	);
}
