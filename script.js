function threeSum(arr, target) {
// write your code here
  let initial=Infinity
	  let ans=-1;
	let n=arr.length;
	for(let i=0;i<=n-3;i++){
		for(let j=i+1;j<=n-2;j++){
			for(let k=j+1;k<=n-1;k++){
				sum=arr[i]+arr[j]+arr[k]
				let diff= Math.abs(sum-target)
				if(initial > diff){
					ans=sum;
				}
			}
		}
	}
	console.log(sum)
}
