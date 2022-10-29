---
title: AWS S3 Cross Region Replication
category: "Software"
date: '2019-02-24'
desc: "AWS Info"
thumbnail: "../images/aws/awsImage.png"
alt: "coconut"
---

Here are my notes on Cross Region Replication

* Versioning must be enabled on both the source and destination buckets.
* Regions msut be unique.
* Files in an existing bucket are not replicated automatically. All subsequent updated files will be replicated automatically.
* You cannot replicate to multiple buckets or daisy chain (at the moment at least).
* Delete markers are not replicated.
* Deleting individual versions or delete markers will not be replicated.

## Resources

[Cross Region Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html)
