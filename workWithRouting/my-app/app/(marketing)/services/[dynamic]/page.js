export default async function dynamic({params}) {
    const { dynamic } = await params;
    return <div>Blog 1 {dynamic}</div>;
}

