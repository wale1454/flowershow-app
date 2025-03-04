interface Props {
    features: {
        title: string,
        description: string,
        imageSrc?: string,
        imageAlt?: string
    }[]
}

export const FeaturesTiles: React.FC<Props> = ({ features }) => {
    return (
        <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f) => (
                <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative overflow-hidden rounded-xl p-6">
                        <div className="h-12 flex items-center">
                            <img
                                src={f.imageSrc}
                                alt={f.imageAlt}
                                className="h-12 w-auto object-contain object-left"
                            />
                        </div>
                        <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
                            {f.title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                            {f.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
