export default async function dynamic({params}) {
    const paramObj = await params;
    const { dynamic } = paramsObj;
    console.log(paramObj);
    return <div>All comments on  {dynamic}</div>;
}
// Dynamic nested routing, means in a dynamic parent, there is a dynamic child present which follows same working functionality
